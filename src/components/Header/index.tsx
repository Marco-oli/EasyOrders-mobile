import React from "react";
import { TouchableOpacity } from "react-native";
import { Text } from "../Text";

import { Container, Content, OrderHeader, Table } from "./styles";

interface HeaderProps {
  selectedTable: string;
  onCancelOrder: () => void;
}

export const Header = ({ selectedTable, onCancelOrder }: HeaderProps) => {
  return (
    <Container>
      {!selectedTable && (
        <>
          <Text size={14} opacity={0.9}>
            Bem vindo(a) ao
          </Text>
          <Text size={24} weight="700">
            EASYORDERS<Text size={24}>APP</Text>
          </Text>
        </>
      )}

      {selectedTable && (
        <Content>
          <OrderHeader>
            <Text weight="600" size={24}>
              Pedido
            </Text>

            <TouchableOpacity onPress={onCancelOrder}>
              <Text size={14} weight="600" color="#d73035">
                cancelar pedido
              </Text>
            </TouchableOpacity>
          </OrderHeader>

          <Table>
            <Text color="#666666">Mesa {selectedTable}</Text>
          </Table>
        </Content>
      )}
    </Container>
  );
};
