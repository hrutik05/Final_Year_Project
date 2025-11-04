import { useState, useRef, useEffect, useCallback } from 'react';

interface UseAccessibleDropdownProps {
  onClose?: () => void;
}

export function useAccessibleDropdown({ onClose }: UseAccessibleDropdownProps = {}) {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const [focusedIndex, setFocusedIndex] = useState(-1);

  const toggle = useCallback(() => {
    setIsOpen(prev => !prev);
    setFocusedIndex(-1);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
    setFocusedIndex(-1);
    triggerRef.current?.focus();
    onClose?.();
  }, [onClose]);

  const open = useCallback(() => {
    setIsOpen(true);
    setFocusedIndex(-1);
  }, []);

  // Handle keyboard navigation
  const handleKeyDown = useCallback((event: React.KeyboardEvent) => {
    if (!isOpen) {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        open();
      }
      return;
    }

    const menuItems = menuRef.current?.querySelectorAll('[role="menuitem"], a, button');
    const itemCount = menuItems?.length || 0;

    switch (event.key) {
      case 'Escape':
        event.preventDefault();
        close();
        break;
      case 'ArrowDown':
        event.preventDefault();
        setFocusedIndex(prev => (prev + 1) % itemCount);
        break;
      case 'ArrowUp':
        event.preventDefault();
        setFocusedIndex(prev => (prev - 1 + itemCount) % itemCount);
        break;
      case 'Home':
        event.preventDefault();
        setFocusedIndex(0);
        break;
      case 'End':
        event.preventDefault();
        setFocusedIndex(itemCount - 1);
        break;
      case 'Enter':
      case ' ':
        if (focusedIndex >= 0 && menuItems) {
          event.preventDefault();
          (menuItems[focusedIndex] as HTMLElement).click();
        }
        break;
      case 'Tab':
        close();
        break;
    }
  }, [isOpen, focusedIndex, open, close]);

  // Focus management
  useEffect(() => {
    if (isOpen && focusedIndex >= 0) {
      const menuItems = menuRef.current?.querySelectorAll('[role="menuitem"], a, button');
      if (menuItems && menuItems[focusedIndex]) {
        (menuItems[focusedIndex] as HTMLElement).focus();
      }
    }
  }, [focusedIndex, isOpen]);

  // Click outside to close
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        triggerRef.current &&
        menuRef.current &&
        !triggerRef.current.contains(event.target as Node) &&
        !menuRef.current.contains(event.target as Node)
      ) {
        close();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, close]);

  return {
    isOpen,
    toggle,
    close,
    open,
    triggerRef,
    menuRef,
    focusedIndex,
    handleKeyDown,
    triggerProps: {
      ref: triggerRef,
      onClick: toggle,
      onKeyDown: handleKeyDown,
      'aria-expanded': isOpen,
      'aria-haspopup': 'true' as const,
    },
    menuProps: {
      ref: menuRef,
      role: 'menu' as const,
      'aria-hidden': !isOpen,
    },
  };
}