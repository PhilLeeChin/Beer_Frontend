import { connect } from 'react-redux'
import StyleCard from "../components/StyleCard"

function Styles({styles}){
    
    return <div>
        {styles.map(style => <StyleCard styleId={style.id} served={style.served} appetizers={style.appetizers} key={style.id} />)}
    </div>
}

const mapStateToProps = (state) => ({
  styles: state.grabBeers.styles
})

export default connect(mapStateToProps)(Styles)