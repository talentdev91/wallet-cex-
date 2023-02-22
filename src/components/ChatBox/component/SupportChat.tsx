/** @format */

import React from 'react'
import clsx from 'clsx'
import { dateToType } from '../../../common/utils'

import { Typography, Avatar } from '@material-ui/core'
import { useStyles, ChatBoxProps } from '../Style'

interface SupportChatProps {
  supportChatHistory: any
}

export default function SupportChat(
  { supportChatHistory }: SupportChatProps,
  { isChatOpen, getCloseState }: ChatBoxProps,
) {
  const classes = useStyles({ isChatOpen, getCloseState })

  return (
    <>
      {supportChatHistory.map((data: any, key: any) => (
        <div key={key}>
          {data.Type === 'Support' ? (
            <div className={classes.chat1}>
              <Avatar className={classes.avatar1}>
                <i className={'fas fa-robot'} />
              </Avatar>
              <div>
                <span className={classes.msgDetailInfo}>{dateToType(data.CreatedAt)}</span>
                <div className={clsx(classes.textArea2)}>
                  <Typography className={classes.chatText}>{data.Message}</Typography>
                </div>
              </div>
            </div>
          ) : (
            <div className={classes.chat2}>
              <div className={classes.rightChat}>
                <span className={classes.msgDetailInfoRight}>{dateToType(data.CreatedAt)}</span>
                <div className={clsx(classes.textArea)}>
                  <Typography className={classes.chatText}>{data.Message}</Typography>
                </div>
              </div>
              <Avatar className={classes.avatar}>
                <i className={'fas fa-user'} />
              </Avatar>
            </div>
          )}
        </div>
      ))}
    </>
  )
}
