import React, { useEffect } from 'react'
import { Container, Stack, Grid, Input, Box, Text, Button, Flex, Spacer, GridItem, Heading } from '@chakra-ui/react'

import { useAppSelector, useAppDispatch } from 'hooks'
import { itemUpdated, Item, itemsUpdated,  } from 'stores/features/calculators'
import { Update } from '@reduxjs/toolkit'

interface Props {
    item: Item
    lowest: boolean
    lowestPPU: number
}

const LineItem: React.FC<Props> = ({ item, lowest, lowestPPU }) => {
    const dispatch = useAppDispatch()
    let onPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(itemUpdated({
            id: item.ID,
            changes: {
                price: e.target.value,
            },
        }))
    }
    let onUnitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(itemUpdated({
            id: item.ID,
            changes: {
                unit: e.target.value,
            },
        }))
    }
    let percentCompareToLowest = !lowest && lowestPPU != Infinity && item.pricePerUnit != Infinity
        ? ' | +'+((item.pricePerUnit*100/lowestPPU)-100).toFixed(2)+'%'
        : ''
    let value = item.pricePerUnit != Infinity
        ?  (lowest ? '* ' : '') + item.pricePerUnit.toFixed(4) + percentCompareToLowest
        : ''

    return (
        <GridItem colSpan={3}>
        <Stack direction='row'>
            <Input onChange={onPriceChange} value={item.price}/>
            <Input onChange={onUnitChange} value={item.unit}/>
            <Input 
                value={value} 
                readOnly
                errorBorderColor='teal.500'
                isInvalid={lowest}
                />
        </Stack>
        </GridItem>
    )
}

const Calculator: React.FC<{}> = ({}) => {
    let ids = useAppSelector(state => state.calculators.ids)
    let index = useAppSelector(state => {
        let increasing: number[] = []
        for (let i=0; i<state.calculators.ids.length; i++) {
            increasing.push(i)
        }
        return increasing
    })
    let items = useAppSelector(state => state.calculators.entities)

    const dispatch = useAppDispatch()

    let reset = () => {
        let resetItems = ids.map<Update<Item>>(id => {
            return {
                id: id,
                changes: {
                    price: '',
                    unit: '',
                    pricePerUnit: Infinity,
                }
            } as Update<Item>
        })
        dispatch(itemsUpdated(resetItems))
    }
    let lowestPPU = items[ids[0]]?.pricePerUnit ?? Infinity

    return (
        <>
            <Grid gap={4} templateColumns='repeat(3, 1fr)' mt={4} mb={4}>
                <GridItem colSpan={3} mt={5} mb={5}>
                    <Heading as='h2' size='xl'>Calculator</Heading>
                </GridItem>
                <GridItem>
                    <Text align={'center'} fontSize='xl'>Price</Text>
                </GridItem>
                <GridItem>
                    <Text  align={'center'} fontSize='lg'>Unit</Text>
                </GridItem>
                <GridItem>
                    <Text textAlign={'center'}  fontSize="lg">Price/Unit</Text>
                </GridItem>
                {index.map(i => (
                    <LineItem 
                        key={i}
                        item={items[i]!}
                        lowest={i == ids[0] && ((items[i]?.pricePerUnit ?? Infinity) != Infinity)}
                        lowestPPU={lowestPPU}
                        />
                ))}
                <GridItem>
                    <Button onClick={reset}>Reset</Button>
                </GridItem>
            </Grid>
        </>
    )
}

export default Calculator