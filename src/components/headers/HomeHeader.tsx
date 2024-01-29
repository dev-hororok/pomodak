import { useCurrentMemberQuery } from '@/queries/memberQueries';
import { Button } from '../ui/button';
import { SunIcon } from '@radix-ui/react-icons';

export const HomeHeader = () => {
  const { data } = useCurrentMemberQuery();
  return (
    <div className="flex items-end fixed top-0 left-0 right-0 md:absolute h-14 px-3 mt-safe md:rounded-t-md">
      <Button variant={'ghost'} className="flex items-center gap-2">
        <SunIcon className="w-3 h-3" /> {data?.point}
      </Button>
    </div>
  );
};
