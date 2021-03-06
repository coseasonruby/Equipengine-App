import React from "react"
import styled from "styled-components"
// components
import Form from "./components/Form"
import Panel from "./components/Panel"
import Button from "./components/Button"
import ButtonAdd from "./components/ButtonAdd"
import User from "./components/User"
import ContainerFlex from "base_components/ContainerFlex"
import Divider from "base_components/Divider"
import Dropdown from "base_components/RootDropdown"

const users = [
  {
    name: "User1"
  },
  {
    name: "User2"
  }
]

//
const PanelWebAddress = () => (
  <Panel title="Accounts" paddingBottom="1.6em">
    <HintText>
      Be careful - this will provide users access to everything related to this
      organisation account.
    </HintText>
    <AddUserWrapper isAlignCenter isSpaceBetween>
      <Title>Administrators</Title>
      <ButtonAdd text="Add user" iconPosition="right" />
    </AddUserWrapper>
    <GrayBorderContainer>
      {users.map(user => <User user={user} />)}
    </GrayBorderContainer>
    <Divider />
  </Panel>
)

const HintText = styled.span`
  color: #6d6d6d;
  margin-bottom: 15px;
  display: inline-block;
`

const Title = styled.h4`
  font-size: 14px;
  color: #000000;
  font-weight: 800;
  margin: 0;
  margin-bottom: ${({ isStandard: x }) => (x ? "15px" : 0)};
`

const AddUserWrapper = styled(ContainerFlex)`
  margin-bottom: 15px;
`

const GrayBorderContainer = styled.div`
  border: 1px solid #e0e0e0;
  padding: 14px;
  margin-bottom: 30px;
`

//
const PanelLanguage = () => (
  <Panel title="Language" borderBottom="0" paddingBottom="0">
    <HintText>
      This will change the default language displayed on all menus within your
      organisation.
    </HintText>
    <ContainerFlex isAlignCenter>
      <LanguageLabel>Select Default Language</LanguageLabel>
      <LanguageDropdown
        placeholder="Language"
        name="country"
        options={[
          { label: "English", value: "en" },
          { label: "German", value: "he" },
          { label: "Russian", value: "ru" }
        ]}
      />
    </ContainerFlex>
  </Panel>
)

const LanguageLabel = styled.span`
  margin-right: 25px;
`

const LanguageDropdown = styled(Dropdown)`
  width: 130px;
`

//
const ItemTabAccountSettings = () => (
  <Form>
    <PanelWebAddress />
    <PanelLanguage />
    <Button>Update</Button>
  </Form>
)

export default ItemTabAccountSettings
