import React from 'react';
import {
  Sidebar, Menu, Icon
} from 'semantic-ui-react';


const SideBar = () =>  {

  return (
    
    <Sidebar as={Menu} 
      vertical
      direction='left'
      visible
      >
      <Menu.Item> 
         <Icon name="home" /> toto@tutu.fr
      </Menu.Item>
      <Menu.Item>
        Mes Listes
      </Menu.Item> 
      <Menu.Item> 
        To do today
      </Menu.Item>
      <Menu.Item>
        Projet tutoré
      </Menu.Item>
      <Menu.Item>
        Stage
      </Menu.Item>
      <Menu.Item> 
      <Icon name="new" /> Nouvelle Liste
      </Menu.Item>
      <Menu.Item> 
      <Icon name="settings" />Paramètres
      </Menu.Item>
      <Menu.Item> 
      <Icon name="exit" />Déconnexion
      </Menu.Item>
     
    </Sidebar>
  );
}

export default SideBar
