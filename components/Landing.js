import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar, Button, Card, List, Paragraph, Title } from 'react-native-paper';

const currencies = [{
    symbol: 'USD'
}, {
    symbol: 'BTC'
}, {
    symbol: 'ETH'
}];

const coins = [
    {
        name: 'DimeCoin',
        value: 120,
    }, {
        name: 'Bitcoin',
        value: 29287
    }, {
        name: 'Ethereum',
        value: 22292
    }];

function Landing() {
    const [expanded, setExpanded] = React.useState(false);

    const [flexValue, setFlexValue] = React.useState(1);

    const [currency, setCurrency] = React.useState(currencies[0]);
    const handlePress = () => {
        setExpanded(!expanded);
        setFlexValue(expanded ? 2 : 1);
    }

    const handleUSD = () => { }
    return (
        <View style={[styles.container, {
            // Try setting `flexDirection` to `"row"`.
            flexDirection: "column"
        }]}>
            <View style={[styles.container, {
                flex: { flexValue },
                width: '95%',
                alignItems: 'flex-end',
            }]}>
                <List.Section>
                    <List.Accordion title='Currency' onPress={handlePress} expanded={expanded}>
                        {currencies.map(currency => {
                            return (
                                <List.Item key={currency.symbol} title={currency.symbol}></List.Item>
                            )
                        })}
                    </List.Accordion>
                </List.Section>
            </View>
            <View style={[styles.container, {
                flex: 9,
                width: '100%'
            }]}>
                {coins.map(coin => {
                    return (
                        <Card key={coin.name} style={[styles.card]}>
                            <Card.Content>
                                <Title style={[styles.coin]}>{coin.value} {coin.name} = 20129 {currency.symbol}</Title>
                            </Card.Content>
                        </Card>
                    )
                })}

            </View>
            <StatusBar></StatusBar>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    card: {
        width: '95%',
        justifyContent: 'center',
        marginTop: 10
    },
    coin: {
        margin: 'auto',
        fontWeight: 'bold'
    },
    graph: {
        width: '95%'
    }
});

export default Landing;