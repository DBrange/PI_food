import {
  Container,
  InputBox,
  Label,
  Input,
  Span,
  InputErr,
  LabelErr,
} from "../../styledComponents/InputFormStyled";

export default function InputForm({
  label,
  type,
  name,
  value,
  handler,
  placeholder,
  id,
  error,
}) {
  return (
    <Container>
      <InputBox>
        {!error ? (
          <>
            <Label htmlFor={id}>{label}</Label>
            <Input
              type={type}
              name={name}
              value={value}
              onChange={handler}
              placeholder={placeholder}
              id={id}
            />
          </>
        ) : (
          <>
            <LabelErr htmlFor={id}>{label}</LabelErr>
            <InputErr
              type={type}
              name={name}
              value={value}
              onChange={handler}
              placeholder={placeholder}
              id={id}
            />
          </>
        )}
      </InputBox>
      {error && <Span>{error}</Span>}
    </Container>
  );
}
