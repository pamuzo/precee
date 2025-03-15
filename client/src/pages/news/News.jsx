import { useEffect } from "react";
import { useNewsStore } from "../../store/news";
import { Box, Container, Heading, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const News = () => {
  const { news, fetchNews } = useNewsStore();

  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

  console.log(news);

  return (
    <>
      <Container>
        {news.map((newsItem, index) => (
          <div key={index}>
            <Heading fontSize={"md"}>{newsItem.title}</Heading>
            <Image src={newsItem.image || newsItem.urlToImage} />
            <Text>{newsItem.description}</Text>
            <Text>{newsItem.description}</Text>
            <Link to={newsItem.url} target="blank">
              <Text fontWeight={"bold"} color="blue.300">
                for more....
              </Text>
            </Link>
            <Box mb={16}></Box>
          </div>
        ))}
      </Container>
    </>
  );
};

export default News;
