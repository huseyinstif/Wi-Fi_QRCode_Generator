import { Header as HeaderRNE, HeaderProps, Icon } from '@rneui/themed';
import { SafeAreaView, View } from 'react-native';

import styles from './Header.Styled';

const HeaderComponent = () => {
    return (
        <SafeAreaView>
          <HeaderRNE
            centerComponent={{ text: 'Wi-Fi QR Code Generator', style:styles.headerText}}
          />
        </SafeAreaView>
      );    
}


export default HeaderComponent;