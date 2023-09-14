import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks}) => {
    return (
        <div className="w-1/3">
            <h3 className="text-3xl">Total BookMarks : {bookmarks.length}</h3>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks : PropTypes.array.isRequired
}

export default Bookmarks;