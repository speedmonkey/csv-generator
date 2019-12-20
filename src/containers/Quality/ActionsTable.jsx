import React from 'react';
import styled from 'styled-components';
import H4 from 'components/H4';
import Button from 'components/Button';
import Input from 'components/Input';
import SelectContainer from 'components/SelectContainer';
import Select from 'components/Select';
import ChevronIcon from 'images/Chevron.svg';
import PropTypes from 'prop-types';

const Actions = styled.div`
  margin-top: 0.5rem;
`;

const Row = styled.div`
  ${tw`flex p-2 pb-1`};
`;

const ActionInput = styled(Input)`
  ${tw`pt-0 pb-0`}
  width: 200px;
  height: 3.3rem;
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
}) => (
  <Actions>
    <H4>Actions à faire sur le tableau</H4>
    <Row>
      <ActionInput
        autoComplete="none"
        value={newColumnName}
        placeholder="Saisir le nombre de carats"
        onChange={e => updateNewColumnName(e.target.value)}
      />
      <Button
        value="Ajouter une nouvelle colonne"
        events={() => addColumnTable(newColumnName)}
      />
    </Row>
    <Row>
      <SelectContainer>
        <Select
          value={columnToDelete}
          onChange={e =>
            updateColumnToDelete(e.target.value)
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
      </SelectContainer>
      <Button
        value="Supprimer la colonne choisie"
        events={() => console.log('add')}
        color="#c11e1ef2"
      />
    </Row>
  </Actions>
);

ActionsTable.propTypes = {
  caratTab: PropTypes.array,
  newColumnName: PropTypes.string,
  columnToDelete: PropTypes.string,
  updateNewColumnName: PropTypes.func,
  addColumnTable: PropTypes.func,
  updateColumnToDelete: PropTypes.func,
};

export default ActionsTable;
