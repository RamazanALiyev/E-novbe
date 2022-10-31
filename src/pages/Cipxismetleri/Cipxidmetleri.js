import React, { useState } from 'react';
import Breadcrumb from '../../components/Breadcrump.js/Breadcrumb'
import Login from '../../components/Login.js/Login';
import manPic from '../../assets/man-in-suit-and-tie 1.png';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Enovbedetail = () => {
    const [checked, setChecked] = useState(true);
    return (
        <div className='elektronNovbe'>
            <Login />
            <Breadcrumb />
            <div className='detailInfo'>
                <div className='head'>
                    <div className='img'><img src={manPic} alt='pic' /></div>
                    <div>
                        <h3>Cip Xidmetleri</h3>
                        <span>(Tezliklə)</span>
                    </div>
                </div>
                <div className='bottom'>
                    <h4>“e-Növbə” istifadəçisinin nəzərinə!</h4>
                    <p>
                        “e-Növbə” istifadəçisinin nəzərinə!
                        “e-Növbə” xidməti elektron gömrük xidmətinin bir növü olaraq sərhəd keçid
                        məntəqələrində növbədə durmaqla vaxt itkisinə yol verməmək və sərhəd buraxılış
                        məntəqələrində fiziki növbənin azaldılması üçün nəzərdə tutulmuşdur. Hər bir
                        vətəndaş könüllü riayət mədəniyyəti əsasında “e-Növbə” sistemindən düzgün
                        istifadə etməklə müvafiq tələbləri dəqiq yerinə yetirməlidir.
                        “e-Növbə” sistemi “Növbə götür – Sərhədə get – Sərhəddən keç” prinsipi əsasında
                        yaradılmışdır. “e-Növbə” istifadəçisi sərhəd buraxılış məntəqəsinə götürdüyü keçid
                        vaxtına uyğun olaraq gömrük postuna gəlməlidir. Vaxtından tez gələn və ya gecikən
                        vətəndaşlar xidmətdən istifadə hüququnu itirməmək üçün yenidən elektron xidmətə
                        daxil olaraq mövcud qeydiyyat üzərində düzəliş edərək sərhəd keçid vaxtını dəyişə
                        bilərlər. Vətəndaş gömrük postunun giriş qapısındakı mövcud canlı növbəyə mane
                        olmamaq şərti ilə uzaq məsafədə gözləməli və mobil telefonuna “Qapıya gedin!” SMS
                        məlumatının gəlməsini gözləməlidir. Vətəndaş qapıya getmək ilə bağlı
                        SMS məlumatını aldıqdan sonra “Sürətli keçid” sözləri yazılmış xüsusi yol zolağı
                        ilə gömrük postunun giriş qapısına yaxınlaşır və giriş qapısında quraşdırılmış
                        elektron tabloda avtomobilinin nömrəsinin əks olunmasına əmin olaraq gömrük
                        postuna daxil olur. Nəzərə almaq lazımdır ki, qeydə alınmış vaxtdan tez keçməsini
                        tələb edən, gecikən və ya hər hansı bir münaqişə yaradan, qaydalara riayət etməyən
                        vətəndaşların elektron növbəsi ləğv ediləcək və elektron növbə üçün ödənilən məbləğ geri qaytarılmayacaqdır.
                    </p>
                </div>
                <div className='footer'>
                    <FormControl component="fieldset">
                        <FormGroup aria-label="position" row>
                            <FormControlLabel
                                value="end"
                                onChange={() => setChecked(checked => !checked)}
                                control={<Checkbox />}
                                label="Tanış oldum və razıyam"
                                labelPlacement="end"
                            />
                        </FormGroup>
                    </FormControl>
                    <div>
                        <Stack spacing={2} direction="row">
                            <Button disabled variant="contained">Ana səhifə</Button>
                            <Button disabled={checked} variant="contained"><Link className='link' to='/stepperone'>Davam et</Link></Button>
                        </Stack>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Enovbedetail