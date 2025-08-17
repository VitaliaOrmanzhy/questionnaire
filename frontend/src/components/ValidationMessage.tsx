interface ValidationMessageProps {
  message: string;
}

const ValidationMessage = ({ message }: ValidationMessageProps) => {
  return <p>{message}</p>;
};

export default ValidationMessage;
