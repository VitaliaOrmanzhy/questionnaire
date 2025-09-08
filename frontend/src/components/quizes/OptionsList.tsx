import type { IOption } from "@/types/quiz";
import { HStack } from "@chakra-ui/react";

interface IOptionsListProps {
  type: "radio" | "checkbox";
  options: IOption[];
}

const OptionsList = ({ type, options }: IOptionsListProps) => {
  return (
    <HStack>
      {options &&
        options.map((el) => (
          <div>
            <input type={type} value={el.id} /> {el.title}
          </div>
        ))}
    </HStack>
  );
};

export default OptionsList;
