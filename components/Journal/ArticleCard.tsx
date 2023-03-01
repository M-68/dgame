import { NextPage } from "next";
import { useRouter } from "next/router";
import { Card, Text, NextUIProvider } from "@nextui-org/react";
import { Box } from "./Box";
import JournalNavbarComponent from "./JournalNavbar";

import { useSession } from "@supabase/auth-helpers-react";

interface Props { article: any };

const JournalArticleCard: NextPage<Props> = ( props ) => {
    const router = useRouter();
    const { article } = props;

    /* function getDate() {
        let time = Date.parse(article.inserted_at)
    } */

    return (
        <NextUIProvider>
        <Card
            isPressable
            css = {{ mb: "$10" }}
            onPress={() => router.push("/journal/Article?id=" + article.id)}
        >
            <Card.Body>
                <Text h2>{article.title}</Text>
                {/*<Text b>posted {getDate()}</Text>*/}
                <Text b>By {article.user_id.toLowerCase()}</Text>
            </Card.Body>
        </Card>
        </NextUIProvider>
    )
}

export default JournalArticleCard;