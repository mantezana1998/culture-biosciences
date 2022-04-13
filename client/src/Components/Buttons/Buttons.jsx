import { Button, Icon } from 'semantic-ui-react';

export default function Buttons(){
    return(
    <>
        <Button animated='vertical'>
            <Button.Content hidden>No Foam</Button.Content>
            <Button.Content visible>
                <Icon name='circle outline' />
            </Button.Content>
        </Button>

        <Button animated='vertical'>
            <Button.Content hidden>Foam</Button.Content>
            <Button.Content visible>
                <Icon name='circle' />
            </Button.Content>
        </Button>
    </>
    )
}
