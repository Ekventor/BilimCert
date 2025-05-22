import React, { SelectHTMLAttributes } from 'react';

interface Option {
  value: string;
  label: string;
}

interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'onChange'> {
  label?: string;
  options: Option[];
  error?: string;
  helperText?: string;
  fullWidth?: boolean;
  onChange?: (value: string) => void;
}

export const Select: React.FC<SelectProps> = ({
  label,
  options,
  error,
  helperText,
  fullWidth = true,
  className = '',
  id,
  onChange,
  ...props
}) => {
  // Генерируем уникальный ID для связи label с select
  const selectId = id || `select-${Math.random().toString(36).substring(2, 9)}`;
  
  // Базовые классы для select
  const baseSelectClasses = 'block rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm';
  
  // Классы для состояния ошибки
  const errorSelectClasses = error ? 'border-red-300 text-red-900 focus:border-red-500 focus:ring-red-500' : '';
  
  // Классы для полной ширины
  const widthClasses = fullWidth ? 'w-full' : '';
  
  // Объединяем все классы
  const selectClasses = `${baseSelectClasses} ${errorSelectClasses} ${widthClasses} ${className}`;
  
  // Обработчик изменения значения
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };
  
  return (
    <div className={fullWidth ? 'w-full' : ''}>
      {label && (
        <label htmlFor={selectId} className="block text-sm font-medium text-gray-700 mb-1">
          {label}
          {props.required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <select
        id={selectId}
        className={selectClasses}
        onChange={handleChange}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${selectId}-error` : helperText ? `${selectId}-helper` : undefined}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p className="mt-1 text-sm text-red-600" id={`${selectId}-error`}>
          {error}
        </p>
      )}
      {helperText && !error && (
        <p className="mt-1 text-sm text-gray-500" id={`${selectId}-helper`}>
          {helperText}
        </p>
      )}
    </div>
  );
};
