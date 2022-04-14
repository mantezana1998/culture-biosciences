import { Card, Image } from 'semantic-ui-react';
import Buttons from '../Buttons/Buttons';

export default function Cards({data}){
    return(
        <>
           {data.map((foam) => {
                return (
                    <Card>
                        <Image src={foam.url}/>
                        <Card.Content>
                            {foam.lastModified}
                        </Card.Content>
                        <Card.Description>
                            <Buttons />
                        </Card.Description>
                    </Card>
                )
            })}
        </>
    )
}