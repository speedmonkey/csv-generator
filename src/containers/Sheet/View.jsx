import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from 'components/Input';
import { NUMBER_VALUES } from 'constants/sheetConstants';
import { SHEET_STEP } from 'constants/appConstants';
import Label from 'components/Label';
import Button from 'components/Button';
import H4 from 'components/H4';
import { colors } from 'root/tailwind';
import history from 'utils/history';
import ShowSelectValues from './ShowSelectValues';
import MoreOptions from './MoreOptions';

const Wrapper = styled.div`
  ${tw`relative`};
`;

const Row = styled.div`
  ${tw`flex flex-row pb-1 pr-2`};
`;

const Section = styled.div`
  ${tw`mr-3`}
`;

const SectionTitle = styled(H4)`
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

const Spacer = styled.div`
  ${tw`mb-2`}
`;

const SheetInput = styled(Input)`
  ::-webkit-inner-spin-button {
    opacity: 1;
  }
  width: 50px;
`;

const SheetView = ({
  emptyProduct,
  optionsSheet,
  productCategory,
  updateDefaultValue,
  updateSheetOptions,
  updateStep,
}) => {
  useEffect(() => {
    if (emptyProduct) history.push('/');
    updateStep(SHEET_STEP);
  }, []);

  return (
    <Wrapper>
      <Row>
        <Section>
          <SectionTitle>
            Caractéristiques principales
          </SectionTitle>
          <Spacer />
          {optionsSheet.selectValues.map((item, index) => (
            <Row key={item.name}>
              <Label>{item.name} :</Label>
              <ShowSelectValues
                selectValues={item.selectValues}
                defaultValue={item.defaulValue}
                optionIndex={index}
                updateDefaultValue={updateDefaultValue}
              />
            </Row>
          ))}
        </Section>
        <Section>
          <SectionTitle>Nombre et poids</SectionTitle>
          <Spacer />
          {optionsSheet.numberValues.map((item, index) => (
            <Row key={item.name}>
              <Label>{item.name} :</Label>
              <SheetInput
                type="number"
                step={item.step}
                value={item.defaultValue}
                onChange={e =>
                  updateDefaultValue(
                    e.target.value,
                    index,
                    NUMBER_VALUES,
                  )
                }
              />
            </Row>
          ))}
        </Section>
        <Section>
          <SectionTitle>Actions disponibles</SectionTitle>
          <MoreOptions optionsSheet={optionsSheet} />
          <Button
            value="Restaurer les caractéristiques par défaut"
            events={() =>
              updateSheetOptions(productCategory)
            }
          />
        </Section>
      </Row>
    </Wrapper>
  );
};

SheetView.propTypes = {
  emptyProduct: PropTypes.bool,
  optionsSheet: PropTypes.object,
  productCategory: PropTypes.string,
  updateDefaultValue: PropTypes.func,
  updateSheetOptions: PropTypes.func,
  updateStep: PropTypes.func,
};

export default SheetView;
