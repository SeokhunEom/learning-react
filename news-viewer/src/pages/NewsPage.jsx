import Categories from '../components/Categories';
import NewsList from '../components/NewsList';
import { useMatch } from 'react-router-dom';

const NewsPage = () => {
  const category = useMatch('/:category')?.params.category || 'all';

  return (
    <>
      <Categories />
      <NewsList category={category} />
    </>
  );
};

export default NewsPage;
