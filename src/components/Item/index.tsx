import { CircleCheck, CircleDashed, Trash2 } from "lucide-react-native";
import { Container, ItemButton, ItemDescription } from "./styles";
import { Separator } from "../../screens/Home/styles";

interface ItemProps {
  status: string;
  description: string;
  hasSeparator?: boolean;
}

export function Item(props: ItemProps){
  return(
    <>
    {props.hasSeparator && <Separator />}

    <Container>
      <ItemButton>
        {props.status === 'pending' ? <CircleDashed size={18} color="#1e1e1e" /> : <CircleCheck size={18} color={"#2c46b1"} />}
        <ItemDescription>{props.description}</ItemDescription>
      </ItemButton>

      <ItemButton>
        <Trash2 size={18} color="#828282" />
      </ItemButton>
    </Container>
    </>
  )
}