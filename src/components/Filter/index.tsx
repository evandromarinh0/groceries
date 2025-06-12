import { CircleCheck, CircleDashed } from "lucide-react-native";
import { Container, FilterText } from "./styles";

export interface FilterProps {
  isActive?: boolean;
  status: "done" | "pending";
  onClick: () => void;
}[]


export function Filter(props: FilterProps){

  return(
    <Container onPress={() => props.onClick()}>
      {props.status === 'done' 
      ? <CircleCheck size={18} color={props.isActive ? '#2c46b1' : '#828282'} /> 
      : <CircleDashed size={18} color={props.isActive ? '#2c46b1' : '#828282'} />
    }
      <FilterText isActive={props.isActive}>{ props.status === "done" ? "Comprados" : "Pendentes" }</FilterText>
    </Container>
  );
}