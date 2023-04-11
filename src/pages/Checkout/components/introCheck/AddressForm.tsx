import { Input } from '../../../../components/Input'
import { InputsContext } from './styles'

export function AddressForm() {
  return (
    <InputsContext>
      <Input placeholder="CEP" type="number" className="cep" />
      <Input placeholder="Rua" className="road" />
      <Input placeholder="Número" type="number" className="number" />
      <Input placeholder="Complemento" className="complement" />
      <Input placeholder="Bairro" className="cologne" />
      <Input placeholder="Cidade" className="city" />
      <Input placeholder="UF" className="uf" />
    </InputsContext>
  )
}
