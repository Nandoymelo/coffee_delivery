import { MapPinLine, CurrencyDollar } from 'phosphor-react'
import {
  AddressInfo,
  Checkoutcontext,
  FormselectionContainer,
  SubTitleFrom,
  TextInfor,
  Textaddress,
  TitleForm,
} from './styles'
import { AddressForm } from './AddressForm'
import { PagamentForm } from './pagamentForm'

export function IntroCheckout() {
  return (
    <Checkoutcontext>
      <TitleForm>Complete seu pedido</TitleForm>
      <FormselectionContainer>
        <SubTitleFrom>
          <MapPinLine size={22} />

          <AddressInfo>
            <Textaddress>Endereço de Entrega</Textaddress>
            <TextInfor>
              Informe o endereço onde deseja receber seu pedido
            </TextInfor>
          </AddressInfo>
        </SubTitleFrom>

        <AddressForm />
      </FormselectionContainer>

      <FormselectionContainer>
        <SubTitleFrom>
          <CurrencyDollar size={22} />
          <AddressInfo>
            <Textaddress>Pagamento</Textaddress>
            <TextInfor>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </TextInfor>
          </AddressInfo>
        </SubTitleFrom>

        <PagamentForm />
      </FormselectionContainer>
    </Checkoutcontext>
  )
}
