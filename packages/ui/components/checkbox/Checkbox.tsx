import React from 'react';

interface CheckBoxProps {
    /**
     * Обработчик нажатия
     */
    onClick?: () => void;

    value: boolean

    label: string

    defaultValue?: boolean
}

/**
 * CheckBox
 */
export const CheckBox = ({
    value,
    label,
    ...props
}: CheckBoxProps) => {
    return (
        <div className="block">
            <div className="mt-2">
                <label className="inline-flex items-center">
                    <input type="checkbox" className="w-6 h-6 rounded-full" />
                    <span className="ml-2 text-text-secondary text-base">{label}</span>
                </label>
            </div>
        </div>
    );
};