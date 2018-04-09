'use strict';

export default {
    sortList ( { state, commit }, { oldIndex, newIndex } ) {
        const oldIndexProject = _.cloneDeep( state.project[ oldIndex ] );

        commit( 'DEL_PROJECT', oldIndex );
        commit( 'ADD_PROJECT', { index: newIndex, project: oldIndexProject } );
    },
    setPanelLogForDevRun ( { commit }, data ) {
        const { id, ip, bsPort, args } = data;

        const url = `http://${ ip }:${ bsPort }`;

        commit( 'SET_PANEL_LOG', { id, type: 'dev', value: url } );
    },
    setPanelLogForDevStop ( { commit }, data ) {
        const { id } = data;

        commit( 'SET_PANEL_LOG', { id, type: 'dev', value: '' } );

        commit( 'SET_LOG', { data, msg: { type: 'success', msg: '已停止' } } );
    }
};
