
interface Props {
    picture: string,
    position: number
}

const Friend = ({picture, position}: Props) => {
    let styles = "col-sm-4 p-1";

    if (position === 7) {
        styles += " bottomLeft"
    }

    if (position === 9) {
        styles += " bottomRight";
    }
    return (
        <img className={styles} src={picture} alt="Friend"/>
    );
};

export default Friend;