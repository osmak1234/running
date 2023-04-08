import React, { useState } from 'react';
import { Box, Text, Input, Button, Grid, GridItem } from '@chakra-ui/react';

const InputFields = () => {
  const [inputList, setInputList] = useState([{ value: '' }]);

  const handleInputChange = (e, index) => {
    const { value } = e.target;
    const list = [...inputList];
    list[index].value = value;
    setInputList(list);
  };

  const handleAddInput = () => {
    setInputList([...inputList, { value: '' }]);
  };

  const handleRemoveInput = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  return (
    <Box
      w='full'
      m='auto'
      display='flex'
      flexDir='column'
      gap={5}
      mt='20px'
    >
      {inputList.map((input, i) => (
        <Box key={i}
          w='full'
          m='auto'
          display='flex'
          flexDir='column'
          gap={5}
          mt='20px'
        >

          <Box key={i} w="full" m="auto" mt="5px" maxW="400px">
            <Grid templateColumns="repeat(4, 1fr)" gap={1}>
              <GridItem colSpan={3}>
                {
                  <Input
                    placeholder='Point coordinates'
                    maxW={"400px"}
                    m='auto'
                    type="text"
                    value={input.value}
                    onChange={(e) => handleInputChange(e, i)}
                  />
                }
              </GridItem>
              <GridItem colSpan={1}>
                {
                  inputList.length !== 1 && (
                    <Button
                      w='full'
                      bg='blue.500'
                      maxW={"400px"}
                      m='auto'
                      _hover={{ bg: "blue.600" }}
                      _active={{ bg: "blue.700" }}
                      onClick={() => handleRemoveInput(i)}>Remove</Button>
                  )
                }
              </GridItem>
            </Grid>
          </Box>

          {inputList.length - 1 === i && <Button
            w='full'
            bg='blue.500'
            maxW={"400px"}
            m='auto'
            _hover={{ bg: "blue.600" }}
            _active={{ bg: "blue.700" }}

            onClick={handleAddInput}>Add</Button>}
        </Box>
      ))}
    </Box>
  );
};

export default InputFields;
