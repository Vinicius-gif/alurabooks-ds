import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AbGrupoOpcoes } from '../src';

export default {
  title: 'Componentes/AbGrupoOpcoes',
  component: AbGrupoOpcoes
} as ComponentMeta<typeof AbGrupoOpcoes>

const Template: ComponentStory<typeof AbGrupoOpcoes> = (args) => <AbGrupoOpcoes {...args}/>;

export const Padrao = Template.bind({});

Padrao.args = {
  opcoes: [
    {
      id: 1,
      titulo: 'E-book',
      corpo: 'R$ 00,00',
      rodape: '.pdf, .epub, .mod'
    },
    {
      id: 2,
      titulo: 'Impresso',
      corpo: 'R$ 22,00',
      rodape: '.pdf, .epub, .mod'
    },
    {
      id: 3,
      titulo: 'Impresso + E-book',
      corpo: 'R$ 222,00',
      rodape: '.pdf, .epub, .mod'
    }
  ]
}
