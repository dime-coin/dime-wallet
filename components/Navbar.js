import { Appbar } from "react-native-paper";

const handleMenu = () => {
    console.log('SHOW MENU');
};

const Navbar = () => {
    return (
        <Appbar.Header>
            <Appbar.Content title="Petti"/>
            <Appbar.Action icon="dots-vertical" onPress={handleMenu} />
        </Appbar.Header>
    );
};

export default Navbar;