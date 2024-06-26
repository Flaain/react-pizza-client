import { StaticValidationRulesArgs } from "../types";

export const validationRules: Record<string, (args: StaticValidationRulesArgs) => boolean> = {
    required: ({ currentValue }) => !!currentValue.trim().length,
    minLength: ({ currentValue, validationValue }) => currentValue.trim().length >= (validationValue as number),
    maxLength: ({ currentValue, validationValue }) => currentValue.trim().length <= (validationValue as number),
    match: ({ currentValue, matchWith }) => currentValue.toLowerCase() === (matchWith as string)?.toLowerCase(),
    pattern: ({ currentValue, validationValue }) => (validationValue as RegExp).test(currentValue),
};