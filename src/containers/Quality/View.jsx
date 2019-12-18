import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Card from 'components/Card';
import H3 from 'components/H3';
import { colors } from 'root/tailwind';
import Table from 'components/Table';
import CaratTable from './CaratTable';

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

const QualityView = ({
  productName,
  qualityFields,
  caratTab,
}) => (
  <div>
    <Card>
      <H3>Étape 3 : Gestion de la qualité et des carats</H3>
      <Row>
        <Table>
          {productName ? (
            <Cell>{productName}</Cell>
          ) : (
            <Cell>Définir le nom de votre produit..</Cell>
          )}
          {qualityFields.map(item => (
            <Cell key={item}>{item}</Cell>
          ))}
        </Table>
        {caratTab.map(item => (
          <CaratTable key={item} caratLines={item} />
        ))}
      </Row>
    </Card>
  </div>
);

QualityView.propTypes = {
  productName: PropTypes.string,
  qualityFields: PropTypes.array,
  caratTab: PropTypes.array,
};

export default QualityView;
