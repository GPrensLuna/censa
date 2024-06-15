import Link from 'next/link';

interface ButtonMenuProfile {
    id: string;
    href: string;
    title: string;
    classNameStyle: string;
}

export const ButtosProfileMenu = ({ id, href, title, classNameStyle }: ButtonMenuProfile) => {

    return (
        <Link href={href} className={classNameStyle}>
            {title}
        </Link>
    );
};
