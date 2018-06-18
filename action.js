import uuid from 'uuid';

const ADD_COMMENT = 'ADD_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const REMOVE_COMMENT = 'REMOVE_COMMENT';
const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

function addComment(text) {
	return {
		type: ADD_COMMENT,
		text,
		id: uuid.v4()
	}
}

function editComment(text) {
	return {
		type: EDIT_COMMENT,
		id: 20,
		text: 'edycja komentarza'
	}
}

function thumbUpComment(text) {
	return {
		type: THUMB_UP_COMMENT,
		id: 20,
		text: 'jest ok'
	}
}

function thumbDownComment(text) {
	return {
		type: THUMB_DOWN_COMMENT,
		id: 20,
		text: 'nie jest ok'
	}
}