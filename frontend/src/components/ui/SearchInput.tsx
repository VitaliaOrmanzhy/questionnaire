import { Input, InputGroup } from "@chakra-ui/react";
import type { ChangeEventHandler } from "react";
import { useTranslation } from "react-i18next";
import { IoSearchSharp } from "react-icons/io5";

interface ISearchInputProps {
  value: string;
  onChange(newVal: string): void;
}

const SearchInput = ({ value, onChange }: ISearchInputProps) => {
  const { t } = useTranslation("main");

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    onChange(e.target.value);
  };

  return (
    <InputGroup startElement={<IoSearchSharp />}>
      <Input
        placeholder={t("search-input-quiz")}
        value={value}
        onChange={handleChange}
      />
    </InputGroup>
  );
};

export default SearchInput;
