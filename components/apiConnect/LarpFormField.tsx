import { useFormContext } from "react-hook-form";
import { Box } from "../styledComponents/Box";
import { StyledInput } from "../styledComponents/StyledInput";
import { StyledLabel } from "../styledComponents/StyledLabel";
import { Text } from "../styledComponents/Text";

interface LarpFormField {
  field: {
    id: string;
    type: string;
    label: string;
    rules: {
      required: boolean;
      minLength: number;
      maxLength: number;
      pattern: RegExp;
    };
    errorMessage: string;
  };
}

export const LarpFormField = ({ field }: LarpFormField) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <Box css={{ display: "flex", flexDirection: "column", gap: "5px" }}>
      <StyledLabel htmlFor={field.id}>{field.label}</StyledLabel>
      <StyledInput
        type={field.type}
        {...register(field.id, {
          minLength: field.rules.minLength,
          maxLength: field.rules.maxLength,
          pattern: field.rules.pattern,
          required: field.rules.required,
        })}
      />
      {errors[field.id] && (
        <Text css={{ color: "Red", fontSize: "0.7rem" }}>
          {field.errorMessage}
        </Text>
      )}
    </Box>
  );
};
