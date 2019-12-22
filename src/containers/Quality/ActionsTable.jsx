import React from 'react';
import styled from 'styled-components';
import H4 from 'components/H4';
import Button from 'components/Button';
import Input from 'components/Input';
import Select from 'components/Select';
import ChevronIcon from 'images/Chevron.svg';
import PropTypes from 'prop-types';
import { colors } from 'root/tailwind';

const Actions = styled.div`
  ${tw`mt-2`}
`;

const ActionsTitle = styled(H4)`
  ${tw`text-blueDarker p-0 pb-2 relative`}
  &::after {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 80%;
    height: 1px;
    border-bottom: 2px solid ${colors.spacer};
    content: '';
  }
`;

const Row = styled.div`
  ${tw`flex pt-2 pb-0`};
`;

const ActionInput = styled(Input)`
  ${tw`pt-0 pb-0 mr-2`}
  width: 150px;
  height: 3.3rem;
`;

const SelectWrapper = styled.div`
  ${tw`relative mr-2`}
`;

const Chevron = styled.img`
  ${tw`absolute`};
  right: 5px;
  top: 5px;
`;

const ActionsTable = ({
  caratTab,
  newColumnName,
  columnToDelete,
  updateNewColumnName,
  addColumnTable,
  updateColumnToDelete,
  deleteColumnTable,
}) => (
  <Actions>
    <ActionsTitle>Actions disponibles</ActionsTitle>
    <Row>
      <SelectWrapper>
        <Select
          value={columnToDelete}
          onChange={e =>
            updateColumnToDelete(
              parseInt(e.target.value, 10),
            )
          }
        >
          {caratTab.map(item => (
            <option
              key={item.tabNumber}
              value={item.tabNumber}
            >
              {item.carats[0]}
            </option>
          ))}
        </Select>
        <Chevron src={ChevronIcon} />
      </SelectWrapper>
      <Button
        value="Supprimer la colonne choisie"
        events={() => deleteColumnTable()}
        color="#c11e1ef2"
      />
    </Row>
    <Row>
      <ActionInput
        autoComplete="none"
        value={newColumnName}
        placeholder="Nombre de carats"
        onChange={e => updateNewColumnName(e.target.value)}
      />
      <Button
        value="Ajouter une nouvelle colonne"
        events={() => addColumnTable(newColumnName)}
      />
    </Row>
  </Actions>
);

ActionsTable.propTypes = {
  caratTab: PropTypes.array,
  newColumnName: PropTypes.string,
  columnToDelete: PropTypes.number,
  updateNewColumnName: PropTypes.func,
  addColumnTable: PropTypes.func,
  updateColumnToDelete: PropTypes.func,
  deleteColumnTable: PropTypes.func,
};

export default ActionsTable;
