import { Card, Image } from 'semantic-ui-react';

export default function Cards({data}){
    return(
        <>
        <h1>Hello World!</h1>
           {data.map((foam) => {
                return (
                    <Card>
                        <Image src={foam.url}/>
                        <Card.Content>
                            {foam.lastModified}
                        </Card.Content>
                    </Card>
                )
            })}
        </>
    )
}