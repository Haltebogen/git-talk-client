import EditMyProfile from '@/organisms/editMyProfile/EditMyProfile';
import NavBarLayout from '@/organisms/navBar/NavBarLayout';
import useInput from 'hooks/useInput';
import { NextPage } from 'next';

const Editprofile: NextPage = () => {
  const [value, onChangeValue, setValue] = useInput('');
  return (
    <div>
      <NavBarLayout>
        <EditMyProfile
          value={value}
          onChange={(event: any) => {
            const { value } = event.target;
            onChangeValue;
            setValue(value);
          }}
        />
      </NavBarLayout>
    </div>
  );
};
export default Editprofile;
