import * as React from 'react';
import openaiapiservice from '../Services/OpenAIAPIService';
import { TextField, NativeSelect, Button, Grid, Card, CardContent } from '@mui/material';
import { ButtonStyles, CardStyles, NativeSelectStyles, TextFieldStyles as Styles, TextFieldStyles } from '../styles/Styles';

const Form = () => {
    async function onSubmit(e) {
        e.preventDefault();
        const prompt = document.querySelector('#prompt').value;
        const size = document.querySelector('#size').value;

        if (prompt === '') {
            alert('Please add some text.');
            return;
        }

        const result = await openaiapiservice.aiImage(prompt, size);
        document.querySelector('#image').src = result;

    }

    return (

        <><>

            <Card sx={CardStyles}>


                <CardContent>
                    <form id="image-form" onSubmit={onSubmit}>
                        <h1>Describe An Image</h1>
                        <br />

                        <TextField id="prompt" type="text" placeholder="Enter Text" sx={TextFieldStyles} />

                        <NativeSelect name="size" id="size" sx={NativeSelectStyles}>
                            <option value="small">Small</option>
                            <option value="medium">Medium</option>
                            <option value="large">Large</option>
                        </NativeSelect>
                        <br />
                        <Button sx={ButtonStyles} type="submit" className="btn">Generate</Button>
                    </form>
                </CardContent>
            </Card>
            <br />
        </><Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: '100vh' }}
        >

                <Grid item xs={3}><section className="showcase"></section><section className="image">
                    <div className="image-container">
                        <h2 className="msg">Here Comes the Photo</h2>
                        <img src="" alt="" id="image" />
                    </div>
                </section>
                </Grid>
            </Grid></>
    )
}

export default Form