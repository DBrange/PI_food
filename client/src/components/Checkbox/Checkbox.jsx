import {
  Input,
  Label,
  LabelBox,
  LabelClick,
} from "../../styledComponents/CheckboxStyled";

export default function Checkbox({ name, value, handler, id, label, checked }) {
  return (
    <>
      <Input
        type="checkbox"
        name={name}
        value={value}
        onChange={handler}
        id={id}
      />
      {!checked.includes(value) ? (
        <LabelBox>
          <Label htmlFor={id}>{label}</Label>
        </LabelBox>
      ) : (
        <LabelBox>
          <LabelClick htmlFor={id}>{label}</LabelClick>
        </LabelBox>
      )}
    </>
  );
}
