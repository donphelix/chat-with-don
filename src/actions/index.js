/**
 * Created by PhpStorm.
 * User: don@donphelix.com
 * Date: 7/19/22
 * Time: 3:49 PM
 */

export const addMessage = payload => {
    return {
        type: "MESSAGE_ADD",
        payload
    };
};
