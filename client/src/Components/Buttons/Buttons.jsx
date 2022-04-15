import { Button, Segment } from 'semantic-ui-react';

export default function Buttons(){
    return(
    <>
        <Segment>
            <Button inverted color='green'>
                Foam
            </Button>
            <Button inverted color='red'>
                Not Foam
            </Button>
        </Segment>
    </>
    )
}
