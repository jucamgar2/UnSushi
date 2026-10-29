import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ResumeDetail from './ResumeDetail';

describe('SushiDetailedCounter', () => {
    it('should render the full resume detail screen', () => {
        render(<ResumeDetail/>);
        const makis = document.getElementById('Maki');
        expect(makis).toBeInTheDocument();
        const uramaki = document.getElementById('Uramaki');
        expect(uramaki).toBeInTheDocument();
        const niguiri = document.getElementById('Niguiri');
        expect(niguiri).toBeInTheDocument();
        const temakis = document.getElementById('Temaki');
        expect(temakis).toBeInTheDocument();
        const bao = document.getElementById('Bao');
        expect(bao).toBeInTheDocument();
        const others = document.getElementById('Otro');
        expect(others).toBeInTheDocument();
        const total = document.getElementById('total');
        expect(total).toBeInTheDocument();
    });

    it('should retrieve the info for the resume', () => {
        localStorage.setItem('Date', new Date());
        const detailedCounter = {
            counter:17,
            maki:5,
            uramaki:3,
            niguiri:3,
            temaki:2,
            bao:1,
            other:1
        }
        localStorage.setItem('DetailedCounter', JSON.stringify(detailedCounter));
        render(<ResumeDetail/>);
        const makis = document.getElementById('Maki');
        expect(makis).toBeInTheDocument();
        const makiCount = makis.getElementsByClassName("resume-line-quantity")[0].querySelector('p');
        expect(makiCount).toBeInTheDocument();
        expect(makiCount).toHaveTextContent('5');
        const uramaki = document.getElementById('Uramaki');
        expect(uramaki).toBeInTheDocument();
        const uramakiCount = uramaki.getElementsByClassName("resume-line-quantity")[0].querySelector('p');
        expect(uramakiCount).toBeInTheDocument();
        expect(uramakiCount).toHaveTextContent('3');
        const niguiri = document.getElementById('Niguiri');
        expect(niguiri).toBeInTheDocument();
        const niguiriCount = niguiri.getElementsByClassName("resume-line-quantity")[0].querySelector('p');
        expect(niguiriCount).toBeInTheDocument();
        expect(niguiriCount).toHaveTextContent('3');
        const temakis = document.getElementById('Temaki');
        expect(temakis).toBeInTheDocument();
        const temakiCount = temakis.getElementsByClassName("resume-line-quantity")[0].querySelector('p');
        expect(temakiCount).toBeInTheDocument();
        expect(temakiCount).toHaveTextContent('2')
        const bao = document.getElementById('Bao');
        expect(bao).toBeInTheDocument();
        const baoCount = bao.getElementsByClassName("resume-line-quantity")[0].querySelector('p');
        expect(baoCount).toBeInTheDocument();
        expect(baoCount).toHaveTextContent('1');
        const others = document.getElementById('Otro');
        expect(others).toBeInTheDocument();
        const othersCount = others.getElementsByClassName("resume-line-quantity")[0].querySelector('p');
        expect(othersCount).toBeInTheDocument();
        expect(othersCount).toHaveTextContent('1');
        const total = document.getElementById('total');
        expect(total).toBeInTheDocument();
        const totalCount = total.getElementsByClassName("resume-line-quantity")[0].querySelector('p');
        expect(totalCount).toBeInTheDocument();
        expect(totalCount).toHaveTextContent('17');
    });

    it("shouldn't retrieve corrupt info for the resume", () => {
        localStorage.setItem('Date', new Date());
        const detailedCounter = {
            counter:17,
            maki:5,
            uramaki:3,
            niguiri:3,
            temaki:2,
            bao:1,
            other:1
        }
        localStorage.setItem('DetailedCounter', detailedCounter);
        render(<ResumeDetail/>);
        const makis = document.getElementById('Maki');
        expect(makis).toBeInTheDocument();
        const makiCount = makis.getElementsByClassName("resume-line-quantity")[0].querySelector('p');
        expect(makiCount).toBeInTheDocument();
        expect(makiCount).toHaveTextContent('0');
        const uramaki = document.getElementById('Uramaki');
        expect(uramaki).toBeInTheDocument();
        const uramakiCount = uramaki.getElementsByClassName("resume-line-quantity")[0].querySelector('p');
        expect(uramakiCount).toBeInTheDocument();
        expect(uramakiCount).toHaveTextContent('0');
        const niguiri = document.getElementById('Niguiri');
        expect(niguiri).toBeInTheDocument();
        const niguiriCount = niguiri.getElementsByClassName("resume-line-quantity")[0].querySelector('p');
        expect(niguiriCount).toBeInTheDocument();
        expect(niguiriCount).toHaveTextContent('0');
        const temakis = document.getElementById('Temaki');
        expect(temakis).toBeInTheDocument();
        const temakiCount = temakis.getElementsByClassName("resume-line-quantity")[0].querySelector('p');
        expect(temakiCount).toBeInTheDocument();
        expect(temakiCount).toHaveTextContent('0')
        const bao = document.getElementById('Bao');
        expect(bao).toBeInTheDocument();
        const baoCount = bao.getElementsByClassName("resume-line-quantity")[0].querySelector('p');
        expect(baoCount).toBeInTheDocument();
        expect(baoCount).toHaveTextContent('0');
        const others = document.getElementById('Otro');
        expect(others).toBeInTheDocument();
        const othersCount = others.getElementsByClassName("resume-line-quantity")[0].querySelector('p');
        expect(othersCount).toBeInTheDocument();
        expect(othersCount).toHaveTextContent('0');
        const total = document.getElementById('total');
        expect(total).toBeInTheDocument();
        const totalCount = total.getElementsByClassName("resume-line-quantity")[0].querySelector('p');
        expect(totalCount).toBeInTheDocument();
        expect(totalCount).toHaveTextContent('0');
    });

    it("shouldn't retrieve ancient info for the resume", () => {
        localStorage.setItem('Date', new Date(Date.now() - (25 * 60 * 60 * 1000)));
        const detailedCounter = {
            counter:17,
            maki:5,
            uramaki:3,
            niguiri:3,
            temaki:2,
            bao:1,
            other:1
        }
        localStorage.setItem('DetailedCounter', JSON.stringify(detailedCounter));
        render(<ResumeDetail/>);
        const makis = document.getElementById('Maki');
        expect(makis).toBeInTheDocument();
        const makiCount = makis.getElementsByClassName("resume-line-quantity")[0].querySelector('p');
        expect(makiCount).toBeInTheDocument();
        expect(makiCount).toHaveTextContent('0');
        const uramaki = document.getElementById('Uramaki');
        expect(uramaki).toBeInTheDocument();
        const uramakiCount = uramaki.getElementsByClassName("resume-line-quantity")[0].querySelector('p');
        expect(uramakiCount).toBeInTheDocument();
        expect(uramakiCount).toHaveTextContent('0');
        const niguiri = document.getElementById('Niguiri');
        expect(niguiri).toBeInTheDocument();
        const niguiriCount = niguiri.getElementsByClassName("resume-line-quantity")[0].querySelector('p');
        expect(niguiriCount).toBeInTheDocument();
        expect(niguiriCount).toHaveTextContent('0');
        const temakis = document.getElementById('Temaki');
        expect(temakis).toBeInTheDocument();
        const temakiCount = temakis.getElementsByClassName("resume-line-quantity")[0].querySelector('p');
        expect(temakiCount).toBeInTheDocument();
        expect(temakiCount).toHaveTextContent('0')
        const bao = document.getElementById('Bao');
        expect(bao).toBeInTheDocument();
        const baoCount = bao.getElementsByClassName("resume-line-quantity")[0].querySelector('p');
        expect(baoCount).toBeInTheDocument();
        expect(baoCount).toHaveTextContent('0');
        const others = document.getElementById('Otro');
        expect(others).toBeInTheDocument();
        const othersCount = others.getElementsByClassName("resume-line-quantity")[0].querySelector('p');
        expect(othersCount).toBeInTheDocument();
        expect(othersCount).toHaveTextContent('0');
        const total = document.getElementById('total');
        expect(total).toBeInTheDocument();
        const totalCount = total.getElementsByClassName("resume-line-quantity")[0].querySelector('p');
        expect(totalCount).toBeInTheDocument();
        expect(totalCount).toHaveTextContent('0');
    });
});