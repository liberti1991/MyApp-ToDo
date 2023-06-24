import { ITaskCard } from "./interfaces";
import { TaskCardContainer, TaskCardIcon, TaskCardTitle } from "./styles";

export function TaskCard({ title, ...rest }: ITaskCard) {
  return (
    <TaskCardContainer {...rest}>
      <TaskCardIcon name="checklist" />
      <TaskCardTitle>{title}</TaskCardTitle>
    </TaskCardContainer>
  );
}
