import Label from './label';
import styles from './styles/colors.module.scss'


export default function Colors(props: any) {

const first = "#87FFB9";
const second = "#F2F2F0";
const third = "#6E7C7C";
const forth = "#0A0B0D";
const fifth = "#FF6D6A";

    return (
        <div className={styles.row}>
            <Label
                chapter={props.chapter}
                title="Brand Colors"
                desc={props.desc}
            />
            <section className={styles.rightcol}>
                <div className={styles.colors}>
                    <ColorBar color={first} fg="black" name="Mint" />
                    <ColorBar color={second} fg="black" name="Bone" />
                    <ColorBar color={third} fg="white" name="Concrete" />
                    <ColorBar color={forth} fg="white" name="Pavement" />
                    <ColorBar color={fifth} fg="black" name="Melon" />
                </div>
            </section>
        </div>
    )

}


export function ColorBar(props: any) {
        return (
            <div className={styles.color} style={{
                background: props.color,
                color: props.fg
                }}>
                {props.name}
            </div>
        )
}