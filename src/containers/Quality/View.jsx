import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Card from 'components/Card';
import H3 from 'components/H3';
import { colors } from 'root/tailwind';
import Table from 'components/Table';
import CaratTable from './CaratTable';
import ActionsTable from './ActionsTable';

const Content = styled.div`
  ${tw`flex flex-col`}
`;

const Row = styled.div`
  ${tw`flex flex-row m-2`};
  border-left: 2px solid ${colors.spacerLight};
`;

const Cell = styled.div`
  ${tw`p-1`};
  border: 1px solid ${colors.spacerLight};
  border-left: 0px;
  font-size: 1.5rem;
  height: 1.5rem;
`;

const CellProductName = styled(Cell)`
  ${tw`bg-spacerLight text-white`}
`;

const QualityView = ({
  productName,
  qualityFields,
  caratTab,
  newColumnName,
  columnToDelete,
  updateValueTable,
  updateNewColumnName,
  addColumnTable,
  updateColumnToDelete,
}) => (
  <div>
    <Card>
      <H3>Étape 3 : Gestion de la qualité et des carats</H3>
      <Content>
        <Row>
          <Table>
            {productName ? (
              <CellProductName>
                {productName}
              </CellProductName>
            ) : (
              <CellProductName>
                Nom de votre produit
              </CellProductName>
            )}
            {qualityFields.map(item => (
              <Cell key={item}>{item}</Cell>
            ))}
          </Table>
          {caratTab.map(item => (
            <CaratTable
              key={item.tabNumber}
              caratLines={item}
              updateValueTable={updateValueTable}
            />
          ))}
        </Row>
        <ActionsTable
          caratTab={caratTab}
          newColumnName={newColumnName}
          columnToDelete={columnToDelete}
          updateNewColumnName={updateNewColumnName}
          addColumnTable={addColumnTable}
          updateColumnToDelete={updateColumnToDelete}
        />
      </Content>
    </Card>
  </div>
);

QualityView.propTypes = {
  productName: PropTypes.string,
  qualityFields: PropTypes.array,
  caratTab: PropTypes.array,
  newColumnName: PropTypes.string,
  columnToDelete: PropTypes.string,
  updateValueTable: PropTypes.func,
  updateNewColumnName: PropTypes.func,
  addColumnTable: PropTypes.func,
  updateColumnToDelete: PropTypes.func,
};

export default QualityView;