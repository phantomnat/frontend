import React, { useEffect, useState } from 'react'
import { Container, Stack, Grid, Input, Box, Text, Button, Flex, Spacer, GridItem, Heading } from '@chakra-ui/react'

import { useAppSelector, useAppDispatch } from 'hooks'
import { Update } from '@reduxjs/toolkit'

const Scum: React.FC<{}> = ({}) => {
    const dispatch = useAppDispatch()
    const [vInput, setVInput] = useState(0)
    const [output1, setOutput1] = useState(0)
    const [output2, setOutput2] = useState(0)
    const [switches, setSwitches] = useState(["","","","","","","",""])
    const [swStates, setSwStates] = useState([false,false,false,false,false,false,false,false])

    let onOutputChanged = (txt1: string, txt2: string) => {
        let o1 = output1
        let o2 = output2
        if (txt1 != null) {
            o1 = (txt1 == "") ? 0 : Number(txt1)
            setOutput1(o1)
        }
        if (txt2 != null) {
            o2 = (txt2 == "") ? 0 : Number(txt2)
            setOutput2(o2)
        }
    }
    let onSwitchChange = (index: number, value: string) => {
        let newSwitches = switches.map((sw, i) => {
            if (i === index) {
                return value
            }
            return sw
        })
        setSwitches(newSwitches)
    }

    let operate = (input: number, expr: string): number => {
        if (expr == "") {
            return input
        }
        let op = expr[0]
        let num = Number(expr.slice(1))
        if (op === "+") {
            return input+num
        } else if (op === "-") {
            return input-num
        } else if (op === "*") {
            return input*num
        } else if (op === "/") {
            return (input/num)|0
        }
        return input
    }

    let search = (input1:number, input2:number, output1: number,output2:number, switches: string[], states: boolean[], index: number):boolean => {
        if (input1 === output1 && input2 === output2) {
            return true
        } else if (index >= switches.length) {
            return false
        }
        if (!switches[index]) {
            return false
        }
        let exprs = switches[index].split(" ")
        if (exprs.length != 2) {
            return false
        }
        let i1 = operate(input1, exprs[0])
        let i2 = operate(input2, exprs[1])
        states[index] = true
        let r1 = search(i1,i2,output1,output2,switches,states,index+1)
        if (r1) {
            return r1
        }
        states[index] = false
        return search(input1,input2,output1,output2,switches,states,index+1)
    }
    useEffect(() => {
        let newSwStates = swStates.map(sw => {
            return sw
        })
        let result = search(vInput, vInput, output1, output2, switches, newSwStates, 0)
        if (result) {
            setSwStates(newSwStates)
        } else {
            setSwStates(swStates.map(_ => (false)))
        }
        console.log(result, newSwStates)
    }, [vInput, output1, output2, switches])

    return (
        <>
            <Grid gap={4} templateColumns='repeat(3, 1fr)' mt={4} mb={4}>
                <GridItem colSpan={3} mt={5} mb={5}>
                    <Heading as='h2' size='xl'>Scum Hack Bunker</Heading>
                </GridItem>
                <GridItem colSpan={2}>
                    <Text align={'center'} fontSize='xl'>Input</Text>
                    <Input value={vInput} onChange={e => setVInput(Number(e.target.value))}></Input>
                </GridItem>
                <GridItem colSpan={1}>
                </GridItem>
                <GridItem colSpan={1}>
                    <Text align={'center'} fontSize='xl'>Output 1</Text>
                    <Input value={output1} onChange={e => onOutputChanged(e.target.value, null)}></Input>
                </GridItem>
                <GridItem colSpan={1}>
                    <Text align={'center'} fontSize='xl'>Output 2</Text>
                    <Input value={output2} onChange={e => onOutputChanged(null, e.target.value)}></Input>
                </GridItem>
                <GridItem colSpan={1}>
                </GridItem>
                <GridItem colSpan={2}>
                    <Text align={'center'} fontSize='xl'>Switches</Text>
                </GridItem>
                <GridItem colSpan={1}>
                </GridItem>
                {
                    switches.map((_, i) => (
                        <>
                        <GridItem colSpan={2} key={i}>
                            <Input value={switches[i]} onChange={e => onSwitchChange(i, e.target.value)}></Input>
                        </GridItem>
                        <GridItem colSpan={1} key={i+',1'}>
                            {swStates[i] ? 'ON' : ''}
                        </GridItem>
                        </>
                    ))
                }
                <GridItem>
                    <Button onClick={()=>{}}>Reset</Button>
                </GridItem>
            </Grid>
        </>
    )
}

export default Scum