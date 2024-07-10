import { useSelector } from 'react-redux';
import * as FunnelStyled from './Funnel.styled';
import { Image } from 'antd';
import { RootState } from '@/store';
import { useNavigate } from 'react-router-dom';
import config from '@/config';
import { diamonds } from '@/pages/Home/shared/ListOfDiamond';

const Funnel = () => {
    const selectedDiamond = useSelector((state: RootState) => state.customRing.selectedDiamond);
    const selectedSetting = useSelector((state: RootState) => state.customRing.selectedSetting);
    const completedRing = useSelector((state: RootState) => state.customRing.completedRing);

    const navigate = useNavigate();

    return (
        <FunnelStyled.FunnelContainer>
            <FunnelStyled.FunnelStep span={8}>
                {selectedDiamond ?
                    <>
                        {diamonds.find((diamond) => diamond.id === selectedDiamond)}
                    </> :
                    <>
                        <FunnelStyled.FunnelStepTitle level={4} onClick={() => navigate(config.routes.public.diamond)}>
                            1. Choose Diamond
                        </FunnelStyled.FunnelStepTitle>
                        <Image src='./src/assets/svg/diamond-icon.svg' preview={false} width={20} />
                    </>
                }
            </FunnelStyled.FunnelStep>
            <FunnelStyled.FunnelStep span={8}>
                {selectedSetting ?
                    <>

                    </> :
                    <>
                        <FunnelStyled.FunnelStepTitle level={4} onClick={() => navigate(config.routes.public.allProduct)}>
                            2. Choose Setting
                        </FunnelStyled.FunnelStepTitle>
                        <Image src='./src/assets/svg/setting-icon.svg' preview={false} width={20} />
                    </>
                }
            </FunnelStyled.FunnelStep>
            <FunnelStyled.FunnelStep span={8}>
                {completedRing ?
                    <>

                    </> :
                    <>
                        <FunnelStyled.FunnelStepTitle level={4}>
                            3. Completed Ring
                        </FunnelStyled.FunnelStepTitle>
                        <Image src='./src/assets/svg/completed-ring.svg' preview={false} width={15} />
                    </>
                }
            </FunnelStyled.FunnelStep>
        </FunnelStyled.FunnelContainer>
    )
}

export default Funnel;  