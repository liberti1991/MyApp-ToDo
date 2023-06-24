import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { FlatList } from "react-native";
import uuid from "react-native-uuid";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Highlight } from "../../components/Highlight";
import { ListEmpty } from "../../components/ListEmpty";
import { TaskCard } from "../../components/TaskCard";
import { ContainerTasks } from "./styles";

export interface Task {
  id: string;
  name: string;
}

export function Tasks() {
  const navigation = useNavigation();

  const [tasks, tasksSet] = useState<Task[]>([
    { id: uuid.v4().toString(), name: "Rocket" },
    { id: uuid.v4().toString(), name: "Rodrigo" },
  ]);

  function handleNewGroup() {
    navigation.navigate("new");
  }

  return (
    <ContainerTasks>
      <Header />
      <Highlight title="Minhas Tarefas" subtitle="Gerencie suas tarefas" />

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TaskCard title={item.name} />}
        contentContainerStyle={tasks.length === 0 && { flex: 1 }}
        ListEmptyComponent={
          <ListEmpty message="Que tal cadastrar a primeira tarefa?" />
        }
      />

      <Button title="Criar nova tarefa" onPress={handleNewGroup} />
    </ContainerTasks>
  );
}
